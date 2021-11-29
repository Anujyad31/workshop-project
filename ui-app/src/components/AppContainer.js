import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import BookListPage from './BookListPage';
import BookDetailsPage from './BookDetailsPage';
import AddBook from './AddBook';

function AppContainer() {
    return (
        <div>
            <Header></Header>
            <Switch>
            <Route exact path={'/'} component={BookListPage}/>
            <Route exact path={'/bookdetails/:id'} component={BookDetailsPage}/>
            <Route exact path={'/addBook'} component={AddBook}/>
        </Switch>
            
        </div>
    )
}

export default AppContainer;
