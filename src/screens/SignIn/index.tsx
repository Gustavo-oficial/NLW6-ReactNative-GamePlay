import React from "react";
import { Text, TextInput, View, Image, StatusBar } from 'react-native';
import IllistrationImg from '../../assets/illustration.png'
import { styles } from "./styles";
import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn() {

  return(
    <View style={styles.container}>
      <StatusBar barStyle="light-content"  backgroundColor="transparent" translucent/>

      <Image source={ IllistrationImg } style={styles.img} resizeMode="stretch"/>

      <View style={styles.content}>
        <Text style={styles.title}>Organize{`\n`}suas jogatinas {`\n`}facilmente</Text>

        <Text style={styles.subtitle}>Crie grupos para jogar seus games{`\n`}favoritos com seus friends</Text>

        <ButtonIcon title="Entrar com o discord"/>
      </View>
    </View>
  );
}


