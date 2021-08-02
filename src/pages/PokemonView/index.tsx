import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import api from '../../services/api';
import styles from './style';
// import { Container } from './styles';
interface IHome {
  id: number;
}
const PokemonView: React.FC<IHome> = ({ id }) => {
  const [nome, setNome] = useState<string>('');
  const [sprite, setSprite] = useState<string>('');
  const [types, setTypes] = useState<Array<{}>>([]);
  // status
  const [status, setStatus] = useState<Array<{}>>([]);
  useEffect(() => {
    (async () => {
      const RESPONSE = await api.get(`pokemon/${id}`);
      const data = RESPONSE?.data;
      setNome(data.species.name);
      setSprite(data.sprites.front_default);
      setStatus(data.stats);
      setTypes(data.types);
      console.log(data.stats[0].stat);
    })();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleContainerText}>{nome}</Text>
      </View>
      <View style={styles.scroolContainer}>
        <ScrollView style={styles.scroolContainerScroll}>
          <View style={styles.scrollContainerScrollImageView}>
            <Image
              source={{
                uri: sprite,
              }}
              style={styles.scrollContainerScrollImage}
            />
          </View>
          <View style={styles.scrollContainerType}>
            <Text style={styles.scrollContainerTypeText}>
              {types.map((t) => {
                return `${t.type.name}\n`;
              })}
            </Text>
          </View>
          <View style={styles.scrollContainerStatus}>
            <Text style={styles.scrollContainerStatusTitle}>Status</Text>
            {/* <Text style={styles.scrollContainerStatusText}>
              {status[0].stat.name} : {status[0].base_stat}
            </Text> */}
            {status.map((val) => {
              return (
                <Text style={styles.scrollContainerStatusText}>
                  {val.stat.name} : {val.base_stat}
                </Text>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default PokemonView;
