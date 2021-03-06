/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { noop } from 'lodash/fp';
import React from 'react';
import { pure } from 'recompose';

import { DataProvider } from './data_provider';
import { ProviderItemBadge } from './provider_item_badge';

interface OwnProps {
  dataProvider: DataProvider;
}

export const Provider = pure<OwnProps>(({ dataProvider }) => (
  <ProviderItemBadge
    deleteProvider={noop}
    field={dataProvider.queryMatch.displayField || dataProvider.queryMatch.field}
    kqlQuery={dataProvider.kqlQuery}
    isEnabled={dataProvider.enabled}
    isExcluded={dataProvider.excluded}
    providerId={dataProvider.id}
    toggleEnabledProvider={noop}
    toggleExcludedProvider={noop}
    val={dataProvider.queryMatch.displayValue || dataProvider.queryMatch.value}
  />
));
