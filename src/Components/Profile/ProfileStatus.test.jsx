import ProfileStatus from "./ProfileStatus";
import TestRenderer from 'react-test-renderer';

describe("Profile status component", () => {
    test('status is verified text', () => {
        let component = TestRenderer.create(<ProfileStatus status={'New status test'}/>);
        // let testInstance = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        let instance = component.getInstance()
        expect(instance.props.status).toBe('New status test');
    })

    test('after rendering component show span', () => {
        let component = TestRenderer.create(<ProfileStatus status={'New status test'}/>);
        let testInstance = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        let span = testInstance.findByType('span')
        expect(span.children.length).toBe(1);
    })

})