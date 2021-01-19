import { getByTestId, render } from '@testing-library/react';
import { AnimeList } from './pages/index'
import { Provider } from 'react-redux'
import store from './store'

describe('test anime list', () => {
  test('renders title anime title', () => {
    const { getByText } = render(
      <Provider store={ store }>
        <AnimeList/>
      </Provider>
    )
    const title = getByText(/Anime List/i)
    expect(title).toBeInTheDocument()
  });
  
  test('Anime list should render data not found', () => {
    const { getByTestId, debug } = render(
      <Provider store={ store }>
        <AnimeList/>
      </Provider>
    )
    debug()
    const data = getByTestId('anime-list-content')
    expect(data).toHaveClass('alert alert-info')
  });

}) 