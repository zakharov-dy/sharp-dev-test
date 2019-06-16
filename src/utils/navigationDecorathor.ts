import {navigate} from './navigation';

export default function (path: string) {
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) {
    const method = descriptor.value;
    descriptor.value = function (...args: any) {
      method.apply(this, args);
      navigate(path);
    };
  };
}
