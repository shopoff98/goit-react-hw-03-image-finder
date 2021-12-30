import React, { Component } from 'react';
import {
  Header,
  Input,
  Span,
  FormButton,
  Form,
} from './styled/Searchbar.styled';
import PropTypes from 'prop-types';
import { ReactComponent as SearchIcon } from '../icons/search.svg';
import toast from 'react-hot-toast';

class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleSearch = e => {
    const { value } = e.currentTarget;
    this.setState({
      imageName: value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    const { imageName } = this.state;
    e.preventDefault();
    if (imageName === '') {
      return toast.error(`И что по-твоему мне вводить?`);
    }
    this.props.onSubmit(imageName);
    this.setState({
      imageName: '',
    });
  };
  render() {
    const { imageName } = this.state;
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <FormButton type="submit">
            <Span>
              <SearchIcon />
            </Span>
          </FormButton>

          <Input
            name="imageName"
            type="text"
            value={imageName}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleSearch}
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
