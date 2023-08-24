import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { LoadMoreBtn } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { PER_PAGE, fetchImages } from './API';
import { ThreeDots } from 'react-loader-spinner';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    total: 0,
  };

  changeQuery = newQuery => {
    this.setState({
      query: newQuery,
      images: [],
      page: 1,
      total: 0,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      const { hits = [], totalHits = 0 } = await fetchImages(
        this.state.query,
        this.state.page
      );
      this.setState(prevState => ({
        ...prevState,
        images: [...prevState.images, ...hits],
        total: totalHits,
      }));
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ ...prevState, page: prevState.page + 1 }));
  };

  render() {
    return (
      <>
        <SearchBar changeQuery={this.changeQuery} />
        <ImageGallery images={this.state.images} />
        <ThreeDots />
        {PER_PAGE * this.state.page < this.state.total && (
          <LoadMoreBtn handleLoadMore={this.handleLoadMore} />
        )}
      </>
    );
  }
}
