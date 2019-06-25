import {observer, Observer} from 'mobx-react';
import {
  Button,
  Header,
  Icon,
  Input,
  Item,
  Picker as NBPicker,
  Text
} from 'native-base';
import React from 'react';

import {Option, Props} from './types';

class Picker extends React.Component<Props> {
  private renderPickerHeader = (backAction: () => void) => (
    <Header searchBar>
      <Item>
        <Icon name="ios-search" />
        <Observer>
          {() => (
            <Input
              placeholder="Search"
              value={this.props.field.filter}
              onChangeText={this.props.field.onFilterChange}
            />
          )}
        </Observer>
      </Item>
      <Button transparent onPress={backAction}>
        <Text>Cancel</Text>
      </Button>
    </Header>
  );

  private renderOption = ({label, value}: Option, key: number) => (
    <NBPicker.Item label={label} value={value} key={key} />
  );

  public render() {
    const {field} = this.props;
    const bound = field.bind();
    return (
      <Item picker error={(field.blurred || !field.isPristine) && field.hasError}>
        <NBPicker
          renderHeader={this.renderPickerHeader}
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" />}
          selectedValue={field.value}
          onValueChange={bound.onChange}
          placeholder={this.props.placeholder}
        >
          {field.pickerOptions.map(this.renderOption)}
        </NBPicker>
      </Item>
    );
  }
}

export default observer(Picker);
