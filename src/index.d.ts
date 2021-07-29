declare module 'test-microfrontend-react-native' {
        interface Props {
            fileName?: string
        }

        const TestMF: (props: Props) => JSX.Element
        
        export default TestMF
}