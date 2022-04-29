@extends('layouts.app')

@section('content')
<div id="mario"></div>
<div id="example"></div>

<div class="container mt-3">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ __('You are logged in!') }}

                    @include("parts.test", ["hoge" => 100])
                    @include("parts.test", ["hoge" => 200])

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
