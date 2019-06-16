import {operationRunner} from '_store/core/operations/operationRunner';

export default function (id: string) {
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) {
    const method = descriptor.value;
    descriptor.value = function (...args: any) {
      return operationRunner(id, method.bind(this)).run(...args);
    };
  };
}
