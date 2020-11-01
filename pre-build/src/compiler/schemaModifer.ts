export const getModifiedSchema = (schema: any) => {
    let splitSchema = schema.split('tId: String');
    splitSchema[0] = splitSchema[0] + 'tId: String @search';
    let joinSchema = splitSchema.join();
    let splitSchemaOnUpdatedTIme = joinSchema.split('updateTime: Float');
    splitSchemaOnUpdatedTIme[0] = splitSchemaOnUpdatedTIme[0] + 'updateTime: Float @search';
    return splitSchemaOnUpdatedTIme.join();
}