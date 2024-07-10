import { Path, Svg } from 'react-native-svg'

// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import { createIcon } from '../factories/createIcon'

export const [PolygonPurple, AnimatedPolygonPurple] = createIcon({
  name: 'PolygonPurple',
  getIcon: (props) => (
    <Svg viewBox="0 0 24 28" fill="none" {...props}>
      <Path
        d="M20.3147 14.03C20.0631 13.5275 19.5409 13.1798 18.9222 13.103L14.3981 12.8549L11.382 12.6058L6.91595 12.3964C6.35527 12.3582 5.83306 12.0105 5.5234 11.4694L4.03278 8.29974C3.78114 7.79724 3.80006 7.13988 4.14773 6.61761L6.07922 3.71611C6.38826 3.25187 6.92939 2.94213 7.58673 2.96098L11.0475 3.17112C11.6081 3.20938 12.1304 3.557 12.44 4.09813L13.9306 7.26779C14.1823 7.77029 14.1634 8.42765 13.8157 8.94992L12.5409 10.8649L15.5956 11.056L16.909 9.08299C17.2181 8.61875 17.295 8.00001 17.024 7.40086L14.1978 1.58343C13.9461 1.08094 13.4239 0.733308 12.8052 0.656426L6.19307 0.274594C5.57437 0.197712 5.03324 0.50745 4.7242 0.97169L1.093 6.42651C0.783958 6.89075 0.707011 7.50949 0.978047 8.10864L3.86231 13.9647C4.11396 14.4672 4.63616 14.8148 5.25487 14.8917L9.68229 15.1591L12.737 15.3502L17.1644 15.6177C17.7251 15.6559 18.2473 16.0035 18.557 16.5447L20.0862 19.6563C20.3379 20.1588 20.319 20.8162 19.9713 21.3384L18.0398 24.2399C17.7308 24.7042 17.1896 25.0139 16.5323 24.9951L13.1296 24.8235C12.5689 24.7853 12.0467 24.4377 11.737 23.8965L10.2078 20.7849C9.95615 20.2824 9.97507 19.625 10.3227 19.1028L11.5589 17.2458L8.50416 17.0547L7.22938 18.9697C6.92034 19.4339 6.84339 20.0527 7.11443 20.6518L9.9987 26.5079C10.2503 27.0104 10.7725 27.358 11.3912 27.4349L17.9067 27.8361C18.4674 27.8744 19.0666 27.6033 19.4142 27.081L23.0841 21.5682C23.3931 21.1039 23.47 20.4852 23.199 19.886L20.3147 14.03Z"
        fill={'currentColor' ?? '#8247E5'}
      />
    </Svg>
  ),
  defaultFill: '#8247E5',
})
