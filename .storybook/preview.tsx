import {
    Controls,
    Description,
    Primary,
    Stories,
    Subtitle,
    Title
} from "@storybook/addon-docs/blocks";
import type { Preview } from "@storybook/react-vite";

import "./globals.css";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />
                    <Primary />
                    <Controls />
                    <Stories includePrimary={false} />
                </>
            )
        }
    },
    tags: ["autodocs"]
};

export default preview;
