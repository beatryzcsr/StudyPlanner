import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";

export default function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  function handleLogin() {
    if (!email || !nome || !telefone) {
      Alert.alert("Atenção", "Por favor, preencha as informações.");
    } else {
      Alert.alert("Sucesso", "Cadastrado!");
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>  
        <ImageBackground source={require('./assets/fundo.jpg')}  style={styles.background} resizeMode="cover" />
         
         <View style={styles.main}>
           <Text style={styles.title}>StudyPlanner</Text>
           <Text style={styles.subtitle}>Organize sua vida acadêmica</Text>
         </View> 
       
         <View style={styles.cards}>
           <View style={styles.card}>
             <Image source={require('./assets/pomodoro.jpg')}  style={styles.img}/>
             <Text style={styles.subtitle}>Pomodoro</Text>
             <Text style= {styles.text}>Gerencie seu tempo de estudo com a técnica Pomodoro.</Text>
           </View>

           <View style={styles.card}>
             <Image source={require('./assets/calendario.jpg')}  style={styles.img}/>
             <Text style={styles.subtitle}>Planejamento</Text>
              <Text style= {styles.text}>Organize suas tarefas e prazos acadêmicos de forma eficiente.</Text>
           </View>

           <View style={styles.card}>
             <Image source={require('./assets/dc.jpg')}  style={styles.img}/>
             <Text style={styles.subtitle}>Discord</Text>
             <Text style= {styles.text}>Participe de grupos de estudo e discuta suas dúvidas.</Text>
           </View>
         </View>

        <View style={styles.form}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Seu nome"
            autoCapitalize="none"
            value={nome}
            onChangeText={setNome}
          />
 
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Seu email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Telefone</Text>
          <TextInput
            style={styles.input}
            placeholder="Seu Telefone"
            value={telefone}
            onChangeText={setTelefone}
          />

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
   

const styles = StyleSheet.create({

  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  img: {
   height:90,
   width:90,
   },

  text: {
    textAlign: "center",
  },

  card: {
   backgroundColor: "#ffffff",
    borderRadius: 12,
    height: 200,
    width: 330,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 2.5,
    borderColor: "#ffdba8",
  },

  form: {
    width: "85%",
    maxWidth: 400,
    backgroundColor: "#ffdba8",
    borderRadius: 12,
    padding: 20,
    shadowRadius: 4,
    elevation: 5,
  },

  title: {
    paddingTop: 45,
    fontSize: 32,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },

  input: {
    width: "100%",
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
  },

  forgotPassword: {
    fontSize: 14,
    textAlign: "right",
    marginBottom: 24,
  },

  loginButton: {
    width: "100%",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eab974",
  },

  loginButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

