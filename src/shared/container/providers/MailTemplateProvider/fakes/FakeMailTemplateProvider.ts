import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';
import ImailTemplateProvider from '../models/IMailTemplateProvider';

export default class FakeMailTemplateProvider implements ImailTemplateProvider {
  public async parse({ template }: IParseMailTemplateDTO): Promise<string> {
    return template;
  }
}
