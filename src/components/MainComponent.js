import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import Menu from './HallofFootball';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './AboutMe';
import DishDetail from './Details';

import { DISHES } from '../shared/photos';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/breakingnews';
import { LEADERS } from '../shared/leaders';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS,
            selectedDish: null,
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId })
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetail comments={this.props.comments} dishes={this.props.dishes} selectedDish={match.params.dishId} />
            );
        };

        return (
            <div>
                <Header />
                <div>
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                        <Route exact path='/contactus' component={Contact} />
                        <Route path='/menu/:dishId' component={DishWithId} />
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}


export default withRouter(connect(mapStateToProps)(Main));
