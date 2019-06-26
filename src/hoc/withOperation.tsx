import {observer} from 'mobx-react';
import {Content, Spinner} from 'native-base';
import React, {Component} from 'react';

import core from '_store/core';

export interface OperationFn {
  (): any;
  id: string;
}

export const withOperation = (operationFn: () => any) => (
  Component: React.ComponentType
) =>
  observer((props: any) => {
    // Декоратор не преобразует интерфейс
    // https://github.com/microsoft/TypeScript/issues/4881
    const id = (operationFn as OperationFn).id;
    const operation = core.operations.get(id);
    return operation && !operation.isLoading ? (
      <Component {...props} />
    ) : (
      <Content>
        <Spinner />
      </Content>
    );
  });
