import {createStackNavigator, createAppContainer} from 'react-navigation';
import MoviesList from '../screens/MoviesList';
import MovieDetail from '../screens/MovieDetail';

const MovieNavigator = createStackNavigator({
    MoviesList: {
        screen: MoviesList
    },
    MovieDetail: {
        screen: MovieDetail
    },
});

export default createAppContainer(MovieNavigator);
