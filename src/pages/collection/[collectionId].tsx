import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import router from 'next/router';
import { Collection as Content } from '../../contents/Collection';
import { getCollectionById } from '../../services/collection';
import { CollectionData } from '../../types/collection';

export default function Collection() {
  const [collection, setCollection] = useState<CollectionData>(null);

  const { asPath } = useRouter();
  const id = asPath.split('/')[2];

  useEffect(() => {
    function getNameCollection() {
      const collection = getCollectionById(id);
      setCollection(collection);
    }

    getNameCollection();
  }, [id]);

  return (
    <React.Fragment>
      <Head>
        <title>{collection ? `Collection - ${collection?.name}` : 'Collection'}</title>
      </Head>
      <Content id={id} />
    </React.Fragment>
  );
}