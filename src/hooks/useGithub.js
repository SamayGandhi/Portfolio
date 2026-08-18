import { useEffect, useState } from "react";
import { fetchGithubProfile } from "../api/githubApi";

function useGithub() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    async function loadProfile() {
      try {
        const data = await fetchGithubProfile();

        if (mounted) {
          setProfile(data);
        }
      } catch {
        if (mounted) {
          setError("Unable to load GitHub profile.");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadProfile();

    return () => {
      mounted = false;
    };
  }, []);

  return {
    profile,
    loading,
    error,
  };
}

export default useGithub;