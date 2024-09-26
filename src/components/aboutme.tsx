// biome-ignore lint/style/useImportType: <explanation>
import * as React from 'react'
// biome-ignore lint/style/useImportType: <explanation>
import { JSX } from 'react/jsx-runtime'
const SvgComponent = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1066.667}
    height={1066.667}
    viewBox="0 0 800 800"
    {...props}
  >
    <path d="m518.2 246.7-.2 71.2-10.6.3c-16.4.5-14.8-6.5-15.2 67.1-.2 41.7 0 62.4.8 64.9 1.8 6.2 3 6.8 13.9 6.8h9.8l.6 5.2c.4 2.9.7 27.3.7 54.2 0 26.9.2 49.2.5 49.4.3.3.5-15.1.5-34.2 0-38.4-.4-35.6 7.1-46.8 2.2-3.1 3.9-6.2 3.9-6.7 0-.6.4-1.1.8-1.1.5 0 1.9-1.9 3.2-4.3 1.3-2.3 4.1-6.8 6.2-10l3.9-5.7H611l.3 97.2.2 97.3.3-97.3.2-97.2h20c22.5 0 23.1-.2 24.7-7.7.4-2.1.8-30.6.8-63.3 0-57.5-.1-59.6-2-63.5l-2-4-67.2-.3-67.3-.2-.3-71.3-.2-71.2-.3 71.2zm60.7 89.9c4.8 3.4 4.9 5.5 2.7 36.6-2.2 30.5-2.8 32.8-7.6 32.8-2.7 0-6-3.4-6-6.3 0-1.2-.9-14.5-2-29.5-2-29.4-1.9-30.5 2.8-33.5 3.4-2.1 7.1-2.1 10.1-.1zm1.9 81c5.7 4 6.4 11.5 1.5 16.6-6.9 7.2-18.3 2.4-18.3-7.7 0-4.1 1.9-7.4 5.5-9.3 2.9-1.6 8.7-1.4 11.3.4zM360.5 228.7c-23 2.2-40.8 17.4-46 39.4-1.9 8.1-1.9 14.7 0 22.7 3.9 16.7 16.2 30.7 31.4 36.1l5.5 1.9-6 .7c-18.7 2.2-28.2 7.6-43.5 25l-7 7.9 3.8 3.9c5.8 5.9 19.8 14.9 29.3 18.6 36.5 14.4 75.4 6.9 104.5-20.1l6.9-6.5-3.2-4c-4.7-6-15.2-15.5-20.5-18.7-5.4-3.1-15.4-5.3-29.2-6.2l-9.6-.7 5.3-1.9c23-8.1 37.5-35.4 31.3-59.2-4.8-18.5-19.9-33.7-37-37.4-6.1-1.3-12-1.9-16-1.5zm3 34.2c.8 2.1 2.5 0 3.5-4.1l.8-3.3.1 4.2c.1 5.4 1.5 5.5 4.1.3 2.5-5 3.5-5.2 1.5-.4-1.8 4.4-1.8 4.4-.1 4.4.8 0 2.9-1.2 4.7-2.8 3.2-2.6 3.3-2.6 1.6-.2-2.5 3.6-2.2 5.3.8 4.8 1.6-.3 2.5-.1 2.5.7 0 .7.6 1.8 1.4 2.4.8.7 1.2 2 .9 3-.3 1 0 2.2.6 2.5.5.4.8 1.3.5 2-.3.8-.1 1.7.5 2 .6.4.8 1.3.5 2.1-.4.9.7 2.5 2.5 4.1 2.6 2.1 3.1 3.3 3.1 6.9 0 4.3-1.9 7.3-3.9 6-.6-.3-.8 0-.5.9.3.9-.3 1.7-1.6 2.1-3 .9-3.4.1-2.1-3.6 1.9-5.6.3-4.4-2.4 1.7-1.4 3.3-3.7 7-5 8.4-1.9 2-2.5 3.8-2.7 9-.2 3.6-.5 6.4-.8 6.3-.3-.1-2.5.3-5 .7-6 1.2-15 .2-15-1.7 0-.7.8-1.6 1.8-1.9 5.4-1.8 12-4.7 13.9-6.2 2.2-1.7 2.1-1.7-5-1.7-9.9 0-12.7-2.1-17.8-13.1-2.3-5.1-4.7-8.8-6.1-9.5-2.2-1.1-2.2-1 .3 1.7 1.4 1.6 3 4.6 3.6 6.6 1 3.5.9 3.8-.8 3.8-2.2 0-2.4-1.1-.7-2.8.9-.9.9-1.2 0-1.2-.7 0-1.5.7-1.9 1.5-.5 1.4-.8 1.4-2.4-.1-3.9-3.5-2.8-13.3 1.7-15.1.7-.3 1.4-1.3 1.4-2.3 0-1.1.4-2.1.9-2.5.6-.3 1-1.3 1-2.3.1-5.2 3-10.2 5.9-10.2 1 0 1.2-.7.7-2.7-.6-2.6-.6-2.7 1.3-1 1 .9 2.6 1.7 3.5 1.7 1.6 0 1.6-.3.2-3.7-2.1-5-1.1-5.4 1.5-.4 1.1 2.3 2.5 4.1 3 4.1.6 0 1-2.4 1.1-5.3l.1-5.2.9 4c.5 2.2 1.2 4.6 1.4 5.4zM166.9 335c-38.8.4-43.7.7-45.2 2.2-.9.9-2 1.8-2.4 2-.5.1-1.7 1.9-2.8 3.8-2 3.5-2 5.4-2 154.5l-.1 151L115 506l.5-142.5h96.2l.2-14.2c0-7.8-.3-14.3-.7-14.5-.4-.2-20.3-.1-44.3.2zM258.8 402.4c-13.9 6.1-14.6 26.2-1.1 32.6 16.5 7.8 32.5-10.5 22.6-25.8-4.6-7.1-14.2-10.1-21.5-6.8zM256.4 454.8c-5.8 3.7-7.9 7.8-7.9 15.8 0 6.1.4 7.5 2.7 10.6 3.9 5.1 8.8 7.1 15.9 6.6 17-1.2 22.4-21.9 8.6-32.2-4-3-15.1-3.4-19.3-.8zM256.9 506.3c-10.5 5.6-12.2 21.2-3.1 28.9 12.2 10.3 29.6 2.1 29.4-13.9-.1-13.3-14.2-21.3-26.3-15zM251.3 674.7c61.4.2 162 .2 223.5 0 61.4-.1 11.1-.2-111.8-.2-122.9 0-173.2.1-111.7.2z" />
  </svg>
)
export default SvgComponent
