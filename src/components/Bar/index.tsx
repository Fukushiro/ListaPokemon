import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './style';
// import { Container } from './styles';
interface IBar {
  atualI: number;
  maximoI: number;
}
const Bar: React.FC<IBar> = ({ atualI, maximoI }) => {
  const [atual, setAtual] = useState<number>(atualI);
  const [maximo, setMaximo] = useState<number>(maximoI);
  console.log(atual + '/' + maximo);

  const tamanhoP = (atual * 1) / maximo;
  const tamanho = tamanhoP * 200;
  console.log('val=' + tamanho);

  return (
    <View style={styles.barraExterna}>
      <View style={[styles.barraInterna, { width: tamanho }]}></View>
    </View>
  );
};

export default Bar;
