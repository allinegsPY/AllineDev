import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';

import {styles} from '../styles/view.style';

import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const ViewItens = () => {
  const navigation = useNavigation();
  function changeScreen() {
    navigation.navigate('Cart');
  }

  function backScreen() {
    navigation.goBack();
  }

  return (
    <View style={styles.conteiner}>
      <ImageBackground
        style={styles.header}
        source={require('../../../assets/fox.png')}
        imageStyle={styles.img}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttomHeader} onPress={backScreen}>
            <Icon name="arrow-left" size={21} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttomHeader} onPress={changeScreen}>
            <Icon name="shopping-cart" size={23} />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.body}>
        <Text style={styles.nameProduct}>NanoBlock Personagens</Text>
        {/* <View>

                </View> */}
        <View style={styles.rowBody}>
          <Text style={styles.rate}>
            4.7/5 <Icon name="star" size={16} color={'#FFA500'} />
          </Text>

          <View style={styles.rowIncraseBtn}>
            <TouchableOpacity
              style={[styles.btnIncrase, {backgroundColor: '#A68DA8'}]}>
              <Text style={styles.icon}>-</Text>
            </TouchableOpacity>
            <Text style={styles.valueIncrase}> 1 </Text>
            <TouchableOpacity
              style={[styles.btnIncrase, {backgroundColor: '#450051'}]}>
              <Text style={[styles.icon, {color: '#fff'}]}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.titleSubSection}>Descrição</Text>
        <Text style={styles.description}>
          Pequeno bloco de construção (compatível com lego)
        </Text>
      </View>

      <View style={styles.footer}>
        <View>
          <Text style={styles.titlePrice}>Preço</Text>
          <Text style={styles.price}>R$ 9,90</Text>
        </View>
        <TouchableOpacity style={styles.btnCard}>
          <Text style={styles.btnCardText}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewItens;
