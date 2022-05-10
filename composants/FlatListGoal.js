import { FlatList,RefreshControl,Button,Text, View} from 'react-native';
const FlatListGoal = ({goals,onRefresh,refreshing}) => {
  function deleteItem(idParam) {
    for (const key in goals) {
      if(goals[key].id == idParam){
        goals.splice(key, 1);
      }
    }
  }
  return (
      <View>
        <FlatList
          data={goals}
          renderItem={({item}) => {
            return (<Text style={{color:"#fff"}}>- {item.texte}
            <Button
              onPress={() => {
                deleteItem(item.id);
                onRefresh();
              }}
              title="Remove"
              color="#841584"
            />
          </Text>
            );
          }}
          keyExtractor={item => item.id}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        />

      </View>
  );
}

export default FlatListGoal;