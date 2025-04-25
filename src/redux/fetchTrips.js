export const fetchTrips = async () => {
  try {
    const response = await fetch(`http://127.0.0.1:3000/trips.json`);

    if (!response.ok) {
      throw new Error('Could not get data');
    }

    const data = await response.json();
    return {
      trips: data,
    };
  } catch (err) {
    console.log(err.message);
    return null;
  } finally {
    console.log('Fetch attempt finished');
  }
};
