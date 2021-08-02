import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import api from '../../services/api';
import styles from './style';
import Bar from '../../components/Bar';
// import { Container } from './styles';
interface IHome {
  id: number;
}
const PokemonView: React.FC<IHome> = ({ id }) => {
  const [nome, setNome] = useState<string>('');
  const [sprite, setSprite] = useState<string>('');
  const [types, setTypes] = useState<Array<{}>>([]);
  const [encounters, setEncounters] = useState<Array<{}>>([]);
  // status
  const [status, setStatus] = useState<Array<{}>>([]);
  useEffect(() => {
    (async () => {
      // chamadas de api
      const RESPONSE = await api.get(`pokemon/${id}`);
      const RESPONSE_ENCOUNTERS = await api.get(`pokemon/${id}/encounters`);
      // get data
      const data = RESPONSE?.data;
      const dataEncounters = RESPONSE_ENCOUNTERS?.data;
      console.log(dataEncounters);

      // set de useStates
      setNome(data.species.name);
      setSprite(data.sprites.front_default);
      setStatus(data.stats);
      setTypes(data.types);
      setEncounters(dataEncounters);
    })();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleContainerText}>{nome}</Text>
      </View>
      <View style={styles.scroolContainer}>
        <ScrollView style={styles.scroolContainerScroll}>
          {/* Imagem */}
          <View style={styles.scrollContainerScrollImageView}>
            <Image
              source={{
                uri: sprite,
              }}
              style={styles.scrollContainerScrollImage}
            />
          </View>
          {/* Tipo do pokemon */}
          <View style={styles.scrollContainerType}>
            <Text style={styles.scrollContainerTypeText}>
              {types.map((t) => {
                return `${t.type.name}\n`;
              })}
            </Text>
          </View>
          {/* Todos status do pokemon */}
          <View style={styles.scrollContainerStatus}>
            <Text style={styles.scrollContainerStatusTitle}>Status</Text>
            {/* <Text style={styles.scrollContainerStatusText}>
              {status[0].stat.name} : {status[0].base_stat}
            </Text> */}
            {status.map((val) => {
              return (
                <View style={styles.scrollContainerStatusArea}>
                  <Text style={styles.scrollContainerStatusText}>
                    {val.stat.name} : {val.base_stat}
                  </Text>
                  <Bar atualI={Number(val?.base_stat)} maximoI={150} />
                  {/* Number(val?.base_stat) */}
                </View>
              );
            })}
          </View>
          {/* Locais para encontrar pokemon */}
        </ScrollView>
      </View>
    </View>
  );
};

export default PokemonView;
