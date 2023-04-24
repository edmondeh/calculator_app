<?php

namespace App\Utility;

class Calculator
{
    public static function calculate(string $string): string
    {
        $parentheses = [];
        $expr = [];
        $string_length = strlen($string);

        for ($i = 0; $i < $string_length; $i++) {
            $c = $string[$i];

            if ($c === "(") {
                $parentheses[] = $i;
            } elseif ($c === ")") {
                $left = array_pop($parentheses);

                if (count($parentheses) === 0) {
                    $tmp = self::calculate(substr($string, $left + 1, $i - $left - 1));
                    $expr[] = $tmp;
                }
            } elseif (count($parentheses) === 0) {
                $expr[] = $c;
            }
        }

        return self::calculateExpression(implode("", $expr));
    }

    public static function calculateExpression(string $string): string
    {
        $stack = [];
        $num = 0;
        $sign = 1;
        $active_operator = '+';
        $string_length = strlen($string);

        for ($i = 0; $i < $string_length; $i++) {
            $c = $string[$i];

            if ($c === '-' && ($i === 0 || self::checkIfChariIsOperator($string[$i - 1]))) {
                $sign = -1;
                continue;
            }

            if (is_numeric($c)) {
                $num = $num * 10 + $c - '0';
            }

            if ($i === $string_length - 1 || self::checkIfChariIsOperator($c)) {
                switch ($active_operator) {
                    case '+':
                        $stack[] = $num * $sign;
                        break;
                    case '-':
                        $stack[] = -1 * $num * $sign;
                        break;
                    case '*':
                        $last_number = array_pop($stack);
                        $stack[] = $last_number * $num * $sign;
                        break;
                    case '/':
                        $last_number = array_pop($stack);
                        $stack[] = $last_number / $num * $sign;
                        break;
                }

                $active_operator = $c;
                $num = 0;
                $sign = 1;
            }
        }

        $result = 0;
        while (count($stack) !== 0) {
            $result += array_pop($stack);
        }

        return $result;
    }

    public static function checkIfChariIsOperator(string $c): bool
    {
        return $c === '+' || $c === '-' || $c === '*' || $c === '/';
    }
}
