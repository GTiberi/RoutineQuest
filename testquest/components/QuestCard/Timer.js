import { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants';

const Timer = ({ dateString }) => {
  const [remainingTime, setRemainingTime] = useState(0); // Initial remaining time in seconds

  const getDateFromString = (dateString) => {
    const parts = dateString.split('-');

    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1;
    const day = parseInt(parts[2]);

    return new Date(year, month, day);
  };

  useEffect(() => {
    // Get the current time
    const now = new Date();
    const expiration = getDateFromString(dateString);
    const secondsSinceMidnight = Math.floor((now - expiration) / 1000); // Convert milliseconds to seconds

    // Calculate the remaining time until midnight
    const totalSecondsInDay = 24 * 60 * 60;
    const remainingSeconds = totalSecondsInDay - secondsSinceMidnight;

    // Start the timer
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    setRemainingTime(remainingSeconds);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Convert remaining time to hours, minutes, and seconds
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  return remainingTime >= 0 ? (
    <View>
      <Text style={styles.timer}>{`Temps restant: ${hours}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</Text>
    </View>
  ) : (
    <View>
      <Text style={styles.timer}>Expiré</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timer: {
    fontSize: SIZES.small,
    fontFamily: FONTS.regular,
    color: COLORS.white,
  },
});

export default Timer;
