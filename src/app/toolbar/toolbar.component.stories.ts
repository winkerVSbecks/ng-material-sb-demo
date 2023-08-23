import type { Meta, StoryObj } from '@storybook/angular';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { moduleMetadata } from '@storybook/angular';
import { ToolbarComponent } from './toolbar.component';

const meta: Meta<ToolbarComponent> = {
  title: 'Toolbar',
  decorators: [
    moduleMetadata({
      declarations: [ToolbarComponent],
      imports: [MatToolbarModule, MatIconModule, MatButtonModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<ToolbarComponent>;

export const Default: Story = {
  args: {
    pageTitle: 'Example Title',
    menu: false,
    searchBar: false,
    userName: 'Example User',
  },
  render: (args) => ({
    props: args,
    template: `
    <app-toolbar pageTitle={{pageTitle}} menu={{menu}} searchBar={{searchBar}} userName={{userName}}>
    </app-toolbar>
    `,
  }),
};
