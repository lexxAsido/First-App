import React, { useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Theme } from '../Component/Theme';
import { Formik } from 'formik';
import * as yup from 'yup';
import * as Animatable from 'react-native-animatable';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowDown, faArrowRightToBracket, faThumbsUp, faUser } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../Component/globalVariables';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../Firebase/Settings';
import { doc, setDoc } from 'firebase/firestore';

const validation = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(8, 'Password too short').required('Password is required'),
  firstname: yup.string().min(2).max(20).required('First name is required'),
  lastname: yup.string().min(2).max(20).required('Last name is required'),
  username: yup.string().min(6).max(15).required('Username is required'),
  address: yup.string().required('address is required'),
});

export default function SignUp({ navigation }) {
  const { setUserUID, setPreloader } = useContext(AppContext);

  return (
      <ScrollView style={{flex:1, backgroundColor: Theme.colors.cyanLight}}>
    <View style={styles.container}>

      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          username: '',
          password: '',
          address: "",
          phone: Number(),
        }}
        onSubmit={(value) => {
          setPreloader(true);
          createUserWithEmailAndPassword(auth, value.email, value.password).then((data) => {
            const { uid } = data.user;
            
            setDoc(doc(db, "users", uid), {
              firstname: value.firstname,
              lastname: value.lastname,
              email: value.email,
              username: value.username,
              userUID: uid,
              address: value.address,
              image: null,
              phone: value.phone,
              role: "user",
            }).then((data) => {
              setPreloader(false)
              setUserUID(uid)
              navigation.replace("News")
            }).catch(e => {
              setPreloader(false)
              console.log(e.code)
            })
          }).catch(e => {
            setPreloader(false)
            console.log(e)
          })
        }}
        validationSchema={validation}
        >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <View style={styles.header}>
              <Text style={styles.headerText}>Sign Up Here</Text>
              <Animatable.View animation="bounce" iterationCount="infinite">
                <FontAwesomeIcon icon={faArrowDown} size={30} style={{ color: Theme.colors.primary }} />
              </Animatable.View>
            </View>

            <View style={styles.formContainer}>
              
              <TextInput
                style={styles.input}
                placeholder="Enter FirstName"
                placeholderTextColor={Theme.colors.greenDark}
                onChangeText={handleChange('firstname')}
                onBlur={handleBlur('firstname')}
                value={values.firstname}
              />
              {touched.username && errors.firstname && <Text style={styles.error}>{errors.firstname}</Text>}

              <TextInput
                style={styles.input}
                placeholder="Enter LastName"
                placeholderTextColor={Theme.colors.greenDark}
                onChangeText={handleChange('lastname')}
                onBlur={handleBlur('lastname')}
                value={values.lastname}
                />
              {touched.username && errors.lastname && <Text style={styles.error}>{errors.lastname}</Text>}

              <TextInput
                style={styles.input}
                placeholder="Enter UserName"
                placeholderTextColor={Theme.colors.greenDark}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                />
              {touched.username && errors.username && <Text style={styles.error}>{errors.username}</Text>}

              <TextInput
                style={styles.input}
                placeholder="House Location"
                placeholderTextColor={Theme.colors.greenDark}
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                value={values.address}
                />
              {touched.username && errors.address && <Text style={styles.error}>{errors.address}</Text>}

              <TextInput
                style={styles.input}
                placeholder="Enter Email"
                placeholderTextColor={Theme.colors.greenDark}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                />
              {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

              <TextInput
                style={styles.input}
                placeholder="Create New Password"
                placeholderTextColor={Theme.colors.greenDark}
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                />
              {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

              <TextInput
                style={styles.input}
                placeholder="Enter Phone Number"
                placeholderTextColor={Theme.colors.greenDark}
                keyboardType='numeric'
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
                />
              {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

              <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Create Account</Text>
                <FontAwesomeIcon icon={faUser} style={{ color: Theme.colors.black }} />
              </TouchableOpacity>
            </View>

            <View style={{marginHorizontal: 20, marginTop: 30}}>
              <Animatable.View animation="flash" iterationCount="infinite" style={{flexDirection:"row", justifyContent:"center"}}>
              <Text style={styles.footerText}>Already have an Account?</Text>
                <FontAwesomeIcon icon={faThumbsUp} size={25} style={{ color: Theme.colors.primary }} />
              </Animatable.View>
              <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginButton}>
                <Text style={styles.loginText}>Login</Text>
                <FontAwesomeIcon icon={faArrowRightToBracket} size={25} color={Theme.colors.primary} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 , justifyContent: 'center', marginTop:60 },
  header: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20, borderWidth:2, backgroundColor:Theme.colors.black, marginHorizontal:10, borderRadius:10  },
  headerText: { fontSize: 30, fontFamily: Theme.fonts.brand, color: Theme.colors.primary, textDecorationStyle:"dotted", textDecorationLine:"underline" },
  formContainer: { marginHorizontal: 10 },
  input: { backgroundColor: 'white', borderWidth: 2, borderRadius: 30, padding: 15, marginVertical: 6 },
  error: { color: 'red', fontSize: 12, paddingHorizontal: 10 },
  button: { flexDirection: 'row', backgroundColor: Theme.colors.primary, padding: 15, borderRadius: 30, alignItems: 'center', justifyContent:"center", marginTop:10 },
  buttonText: { fontFamily: Theme.fonts.text800, fontSize: 18 },
  
  footerText: { fontFamily: Theme.fonts.text800 },
  loginButton: { flexDirection: 'row', backgroundColor: Theme.colors.black, padding: 10, borderRadius: 30, justifyContent:"center", gap:5 },
  loginText: { fontFamily: Theme.fonts.text900, fontSize: 18, color: Theme.colors.primary },
});
