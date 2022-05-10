import { Button,TextInput,Modal,Pressable,Text, View} from 'react-native';
const ModalAjouter = ({onRefresh,addItem,TextInputValeur,onChangeTextInputValeur,styles,modalVisible,setModalVisible}) => {

  return (
    <View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
            }}
        >
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 22 }}>
                <View style={{ margin: 20, backgroundColor: "white", borderRadius: 20, padding: 35, alignItems: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5 }}>
                    <TextInput
                        style={styles.input}
                        placeholder="champ input"
                        keyboardType="default"
                        value={TextInputValeur}
                        onChangeText={onChangeTextInputValeur}
                    />
                    <Button
                        onPress={() => {
                            addItem();
                            onRefresh();
                        }}
                        title="Add"
                        color="#841584"
                    />
                    <Pressable
                    style={{marginTop:20,borderRadius: 20, padding: 10, elevation: 2, backgroundColor: "red"}}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={{color:'white'}}>Fermer</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>  
        <Pressable
            style={{borderRadius: 20, padding: 10, elevation: 2, backgroundColor: "green"}}
            onPress={() => setModalVisible(true)}
        >
            <Text style={{color:'white', textAlign:'center'}}>Ajouter</Text>
        </Pressable> 
    </View>
  );
}

export default ModalAjouter;