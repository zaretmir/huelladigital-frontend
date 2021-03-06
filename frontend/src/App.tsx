import React, { useContext } from 'react';
import './styles/scss/index.scss';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { ROUTE } from './utils/routes';
import { EmailConfirmation } from './pages/EmailConfirmation';
import { WrapperPages } from './components/templates/WrapperPages';
import { Header } from './components/organisms/Header';
import { Footer } from './components/organisms/Footer';
import { LoginRegister } from './pages/LoginRegister';
import { ConvocatoryDetails } from './pages/Convocations/ConvocatoryDetails';
import { ConvocatoryList } from './pages/Convocations/ConvocatoryList';
import { ConvocatoryRegister } from './pages/Convocations/ConvocatoryRegister';
import { Context } from './Context';
import { OrganizationRegister } from './pages/Organizations/OrganizationRegister';

const App: React.FC = () => {
  const { isAuth } = useContext(Context);

  return (
    <Router>
      <div className="App">
        <WrapperPages>
          <Header />
          <Switch>
            <Route path={ROUTE.convocatories.list} component={ConvocatoryList} />
            <Route path={ROUTE.convocatories.details} component={ConvocatoryDetails} />
            <Route path={ROUTE.convocatories.register} component={ConvocatoryRegister} />
            <Route exact path={ROUTE.home} component={Home} />
            <Route exact path={ROUTE.loginRegister} component={LoginRegister} />
            <Route
              exact
              path={ROUTE.organizations.register}
              component={OrganizationRegister}
            />
            <Route path={ROUTE.email.confirmation} component={EmailConfirmation} />
            {!isAuth && <Redirect from={ROUTE.home} to={ROUTE.loginRegister} />}
            {isAuth && <Redirect from={ROUTE.loginRegister} to={ROUTE.home} />}
          </Switch>
          <Footer />
        </WrapperPages>
      </div>
    </Router>
  );
};

export default App;
