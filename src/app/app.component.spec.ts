import { DefaultValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { Shallow } from 'shallow-render';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  let shallow: Shallow<AppComponent>;

  beforeEach(() => {
    shallow = new Shallow(AppComponent, AppModule);
  });

  it('should create the app', async () => {
    const rendered = await shallow.render();
    expect(rendered).toBeTruthy();
  });

  it(`should have as title 'shallow-mask'`, async () => {
    const { instance } = await shallow.render();
    expect(instance.title).toEqual('shallow-mask');
  });

  it('should render title', async () => {
    const { find } = await shallow.render();
    expect(find('#title').nativeElement.textContent).toContain(
      'shallow-mask app is running!'
    );
  });
});
