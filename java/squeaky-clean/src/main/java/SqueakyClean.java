class SqueakyClean {

    private static String toUnderscore(String str) {
        return str.replaceAll(" ", "_");
    }

    private static String toCTRL(String str) {
        return str.replaceAll("\0", "CTRL");
    }

    private static String toCamelCase(String str) {
        if(!str.contains("-")) return str;

        boolean isFirst = true;
        var sb = new StringBuilder();
        for(var word: str.split("-")){
            sb.append( isFirst ? word.charAt(0): word.substring(0, 1).toUpperCase())
              .append(word.substring(1, word.length()));
            isFirst = false;
        }
        return sb.toString();
    }

    private static String cleanGarbage(String str) {
        return str.replaceAll("[\\d\u03B1-\u03C9\\p{So}]*", "");
    }

    static String clean(String identifier) {
        return cleanGarbage(toCTRL(toCamelCase(toUnderscore(identifier))));
    }
}
