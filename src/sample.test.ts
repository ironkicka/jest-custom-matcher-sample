import {getMembers} from './sample'

describe(getMembers.name,()=>{
  it('Check if each member has values with expected types',()=>{
    const members = getMembers()
    members.forEach((member)=>{
      expect(member).toMatchObject({
        id:expect.any(Number),
        name:expect.any(String),
        department:expect.toBeTypeOrNull(String)
      })
    })
  })
})
