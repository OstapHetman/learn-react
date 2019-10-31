import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

class Search extends Component {

    state = {
        searchText: '',
        amount: 10,
        apiUrl: 'https://cors-anywhere.herokuapp.com/https://pixabay.com/api',
        apiKey: '14113266-3412da7354b5526a10f76b695',
        images: []
    }

    onTextChange = e => {
        this.setState({ [e.target.name]: e.target.value }, () => {
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
            .then(res => this.setState({ images: res.data.hits }) )
            .catch(err => console.log(err));
        });
    }

    onAmountChange() {
        console.log('here')
    }

    render() {
        return (
            <div>
                <Grid container spacing={3} style={{ marginTop: '25px' }}>
                    <Grid item xs={12} sm={3}>
                        <TextField name="searchText" value={this.state.searchText} onChange={this.onTextChange} label="Search for Images"/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <InputLabel id="demo-simple-select-label">Amount</InputLabel>
                        <Select
                            id="demo-simple-select"
                            value={this.state.amount}
                            onChange={this.onAmountChange}
                            style={{ width: '100%' }}
                        >
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default  Search
