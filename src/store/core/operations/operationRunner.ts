import {flow} from 'mobx';

import core from '../index';

// Поскольку flow канселится можно добавить и cancel, но тут это не нужно
export const operationRunner = <TArgs extends any[], TRes>(
  id: string,
  genFunc: any
) => {
  const run = (...args: TArgs) => {
    core.addOrUpdateOperation({
      id,
      isLoading: true,
      isError: false,
      error: null,
      args
    });

    const onSuccess = () => {
      core.addOrUpdateOperation({
        id,
        isError: false,
        error: null,
        isLoading: false
      });
    };

    const onError = (error: any) => {
      console.log(error);
      core.addOrUpdateOperation({
        id,
        isError: true,
        error,
        isLoading: false
      });
    };

    return flow(genFunc)(args)
      .then(onSuccess)
      .catch(onError);
  };

  const destroy = () => {
    core.removeOperation(id);
  };

  return {
    id,
    run,
    destroy
  };
};
