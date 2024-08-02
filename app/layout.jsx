import '@styles/global.css';
import { Children } from 'react/cjs/react.production.min';
export const metadata={
    title: "promptopia",
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({Children}) => {
  return (
    <html Lang="en">
        <body>
            <div className="main">
<div className="gradient"/>
            </div>
            <main className="app">
                {Children}

            </main>
        </body>

    </html>
  )
}

export default RootLayout;