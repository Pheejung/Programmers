class Solution {
    public int solution(String skill, String[] skill_trees) {
        int answer = 0;

        for(String s : skill_trees) {
            String tmpSkill = s;

            for (int i=0; i<s.length();i++) {
                String str = s.substring(i, i+1);
                if(!skill.contains(str)) {
                    tmpSkill = tmpSkill.replace(str, "");
                }
            }

            if(skill.indexOf(tmpSkill) == 0){
                answer++;
            }
        }
        return answer;
    }
}