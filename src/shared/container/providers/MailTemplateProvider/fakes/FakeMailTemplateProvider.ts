import ImailTemplateProvider from '../models/IMailTemplateProvider';

export default class FakeMailTemplateProvider implements ImailTemplateProvider {
  public async parse(): Promise<string> {
    return 'Mail Content';
  }
}
