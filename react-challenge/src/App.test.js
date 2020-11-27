import { render } from '@testing-library/react';
import { AnimeList } from './pages/index'
import { Provider } from 'react-redux'
import store from './store'

describe('test app', () => {
  test('renders learn react link', () => {
    const { getByText } = render(
      <Provider store={ store }>
        <AnimeList/>
      </Provider>
    )
    const title = getByText(/Anime List/i)
  
    expect(title).toBeInTheDocument()
  });
}) 