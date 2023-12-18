import { useState, useEffect } from 'react';

const ProgressBar = ({ value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the progress by 1 until it reaches the specified value
      if (progress < value) {
        setProgress(prevProgress => prevProgress + 1);
      } else {
        clearInterval(interval); // Stop the interval when the progress reaches the specified value
      }
    }, 20); // Adjust the interval duration as needed

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [value, progress]);

  return (
    <progress className="progress progress-accent w-56" value={progress} max="100"></progress>
  );
};

export default ProgressBar;
