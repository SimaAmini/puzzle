import { StyleSheet, View } from 'react-native';
import colors from '@configs/colors';
import { Avatar } from './avatar';
import { Text } from './text';
import { Link } from './link';

export const ProfileHeader = ({ username, email }) => {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Avatar style={styles.avatar} />
        <View style={styles.texts}>
          <Text style={styles.userName}>{username}</Text>
          <Text style={styles.jobTitle}>{email}</Text>
        </View>
      </View>
      <View style={styles.bio}>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quidem
          autem consectetur magnam, sequi alias labore et corporis magni facere
        </Text>
      </View>
      <View style={styles.website}>
        <Link url={'https://google.com'}>my-website.com</Link>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.box}>
          <Text style={styles.number}>365</Text>
          <Text style={styles.label}>Posts</Text>
        </View>

        <View style={styles.verticalLine} />

        <View style={styles.box}>
          <Text style={styles.number}>240</Text>
          <Text style={styles.label}>Followers</Text>
        </View>

        <View style={styles.verticalLine} />

        <View style={styles.box}>
          <Text style={styles.number}>365</Text>
          <Text style={styles.label}>Followings</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  user: {
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  texts: {
    marginLeft: 5,
    textAlign: 'center',
  },
  userName: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
  jobTitle: {
    color: colors.medium,
    textAlign: 'center',
  },
  bio: {},
  website: {
    margin: 20,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  box: {
    padding: 20,
  },
  number: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: colors.dark,
  },
  label: {
    textAlign: 'center',
    color: colors.medium,
  },
  verticalLine: {
    height: '60%',
    width: 0.5,
    backgroundColor: colors.medium,
  },
  avatar: {
    width: 100,
    height: 100,
  },
});
