<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CriarTabelaAlternativas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('alternativas', function (Blueprint $table) {
            $table->tinyIncrements('id');
            $table->integer('texto');
            $table->boolean('correta')->default(false);
            $table->integer('questao_id');

            $table->foreign('questao_id')
                ->references('questao')
                ->on('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('alternativas');
    }
}
