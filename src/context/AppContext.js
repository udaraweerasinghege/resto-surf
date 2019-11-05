import React, {Component, createContext} from "react";
import PropTypes from 'prop-types';

export const AppContext = createContext({
    restaurants: [],
    loading: true,
    location: {
        latitude: null,
        longitude: null
    },
    error: ''
});

export default class AppProvider extends Component {
    componentWillMount = async () => {
        await this.restoRequest();
        await this.getGeolocation();
    };

    updateField = (field, value) => {
        this.setState({
            [field]: value
        })
    };

    updateFields = (values) => {
        this.setState(state => ({
            state,
            ...values
        }))
    }

    restoRequest = async () => {
        try {
            const query = `
              {
                restaurants {
                  id
                  name
                  logo
                  slug
                  visits
                }
              }
            `;
            const restoRes = await fetch(`/graphql?query=${query}`);
            const restos = await restoRes.json();
            this.setState({
                restaurants: restos.data.restaurants,
                loading: false
            });
        } catch (e) {
            throw e;
        }
    };

    success = position => {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
    
        this.setState({ 
            error: '',
            location: {
                latitude,
                longitude,
            }, 
            loadDom: true
        }, () => this.setState({loading: false}));
    }
    
    error = () => {
        this.setState({ error: 'Unable to retrieve your location'}, () => this.setState({loading: false}));
    }
    
    getGeolocation = async () => {
        if (!navigator.geolocation) {
            this.setState({ error: 'Geolocation is not supported by your browser'});
        } else {
            this.setState({loading: true});
            await navigator.geolocation.getCurrentPosition(this.success, this.error);
        }
    }

    state = {
        restaurants: [],
        loading: true,
        location: {
            latitude: 0,
            longitude: 0,
        },
        updateField: this.updateField,
        updateFields: this.updateFields,
    };

    render() {
        return (
            <AppContext.Provider value={{...this.state}}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

AppProvider.propTypes = {
    children: PropTypes.node
}

export const AppConsumer = AppContext.Consumer;