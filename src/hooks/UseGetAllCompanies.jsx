import axios from 'axios';
import { useEffect, useState } from 'react';
import { COMPANY_API_POINT } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { setCompanies } from '../redux/companySlice'; // Remove unused imports

const UseGetAllCompanies = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // Track component mount status

    const fetchAllCompanies = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(`${COMPANY_API_POINT}/get`, {
          withCredentials: true,
        });

        // Validate response structure
        if (!res.data || typeof res.data.success === 'undefined') {
          throw new Error('Invalid API response');
        }

        if (res.data.success && isMounted) {
          dispatch(setCompanies(res.data.companies || []));
        } else {
          throw new Error(res.data.message || 'Failed to fetch companies');
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'An error occurred while fetching companies');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchAllCompanies();

    // Cleanup to prevent state updates after unmount
    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array for fetch on mount

  return { loading, error };
};

export default UseGetAllCompanies;