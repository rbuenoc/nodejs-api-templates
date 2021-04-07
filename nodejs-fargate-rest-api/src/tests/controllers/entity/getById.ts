import * as findOneModule from '../../../services/mongodb/findOne';
import { getEntityById } from "../../../services/business/entity";

import assert from 'assert';
import { stub } from 'sinon';

describe('getEntityById Entity Controller Method', () => {

    const sampleEntity = { id: 125536, name: 'Entity name', description: 'This is the entity name for the Entity REST API' };

    it('should return the sample entity', async () => {
        stub(findOneModule, 'findOne').returns(new Promise((res, rej) => res(sampleEntity)));

        const result = await getEntityById(125536);
        assert.strictEqual(result.id, 125536);
        assert.strictEqual(result.name, 'Entity name');
        assert.strictEqual(result.description, 'This is the entity name for the Entity REST API');
    });
});
