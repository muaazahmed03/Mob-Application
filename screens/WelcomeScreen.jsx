import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Text, Card, Button, Title, Paragraph, Avatar } from 'react-native-paper';

const LeftContent = (props) => <Avatar.Icon {...props} icon="account" />;
const LeftContent2 = (props) => <Avatar.Icon {...props} icon="star" />;
const LeftContent3 = (props) => <Avatar.Icon {...props} icon="email" />;

export default function WelcomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>🎉 Welcome to the App!</Text>
      <Text style={styles.subheading}>Explore features and get started below:</Text>

      <Card style={styles.card}>
        <Card.Title title="Your Profile" subtitle="Manage your personal info" left={LeftContent} />
        <Card.Content>
          <Paragraph>You can update your name, email, and preferences anytime.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => {}}>Edit Profile</Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Achievements" subtitle="Track your progress" left={LeftContent2} />
        <Card.Content>
          <Paragraph>Earn rewards and badges as you grow with us.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => {}}>View Stats</Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Support" subtitle="Need help?" left={LeftContent3} />
        <Card.Content>
          <Paragraph>Contact us any time. We’re here to assist you.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => {}}>Get Help</Button>
        </Card.Actions>
      </Card>

      <Button 
        mode="contained" 
        style={styles.logoutButton}
        onPress={() => navigation.navigate('Login')}
      >
        Logout
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 60,
    backgroundColor: '#f2f2f2',
    flexGrow: 1,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color: '#4b3bbd',
  },
  subheading: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
  },
  card: {
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
  },
  logoutButton: {
    marginTop: 20,
    paddingVertical: 5,
    borderRadius: 8,
  },
});
