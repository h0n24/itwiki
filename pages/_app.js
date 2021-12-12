import 'nextra-theme-docs/style.css'

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export const Links = ({ children }) => (
  <footer class="mt-24">
    <div class="flex flex-row items-center justify-between">{children}</div>
  </footer>
)

export const PrevPage = ({ children }) => (
  <div>
    <a
      class="text-lg font-medium p-4 -ml-4 no-underline text-gray-600 hover:text-blue-600 flex items-center mr-2"
      title={children}
      href="start/"
    >
      <svg
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="transform inline flex-shrink-0 rotate-180 mr-1"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
      {children}
    </a>
  </div>
)

export const NextPage = ({ children }) => (
  <div>
    <a
      class="text-lg font-medium p-4 -mr-4 no-underline text-gray-600 hover:text-blue-600 flex items-center ml-2"
      title={children}
      href="start/"
    >
      {children}
      <svg
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="transform inline flex-shrink-0 ml-1"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </a>
  </div>
)
