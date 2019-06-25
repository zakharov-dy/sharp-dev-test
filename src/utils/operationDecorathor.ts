import {operationRunner} from '_store/core/operations/operationRunner';

export default function (id?: string) {
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) {
    const method = descriptor.value;
    const operationId = id || `${target.constructor.name}_${propertyName}`;
    descriptor.value = function (...args: any) {
      return operationRunner(operationId, method.bind(this)).run(...args);
    };
    // В любом случае в интерфейсе метода id будет недоступен
    // https://github.com/microsoft/TypeScript/issues/4881
    descriptor.value.id = operationId;
  };
}
